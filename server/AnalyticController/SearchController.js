import Search from "../AnalyticModel/Search.js";
import SearchAppearance from "../AnalyticModel/SearchAppearence.js";

export const addSearch = async (req, res) => {
  try {
    const { search } = req.body;
    const ip =
      req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    if (!search) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const normalizedSearch = search.trim().toLowerCase();

    // 1. Find existing search entry
    let searchEntry = await Search.findOne({ search: normalizedSearch });
    let searchUniqueId;

    // 2. If not exists, generate uniqueId and create new search entry
    if (!searchEntry) {
      const lastSearch = await Search.findOne().sort({ uniqueId: -1 }).lean();
      searchUniqueId = lastSearch?.uniqueId ? lastSearch.uniqueId + 1 : 1;

      searchEntry = await Search.create({
        uniqueId: searchUniqueId,
        search: normalizedSearch,
      });
    } else {
      searchUniqueId = searchEntry.uniqueId;
    }

    // 3. Check for existing SearchAppearance by searchId (search.uniqueId)
    let appearance = await SearchAppearance.findOne({
      searchId: searchUniqueId,
    });

    const newSearchedRecord = { ip, date: new Date() };

    if (appearance) {
      appearance.searched.push(newSearchedRecord);
      await appearance.save();
    } else {
      // Generate uniqueId for SearchAppearance
      const lastAppearance = await SearchAppearance.findOne()
        .sort({ uniqueId: -1 })
        .lean();
      const newAppearanceUniqueId = lastAppearance?.uniqueId
        ? lastAppearance.uniqueId + 1
        : 1;

      await SearchAppearance.create({
        uniqueId: newAppearanceUniqueId,
        searchId: searchUniqueId,
        searched: [newSearchedRecord],
      });
    }

    return res.status(200).json({ message: "Search recorded successfully" });
  } catch (error) {
    console.error("Error recording search:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllSearches = async (req, res) => {
  try {
    const searches = await Search.find();
    return res.status(200).json(searches);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getSearchesById = async (req, res) => {
  try {
    const { objectId } = req.params;

    const searches = await Search.findById(objectId).lean(); // lean makes it a plain JS object
    if (!searches) {
      return res.status(404).json({ error: "Search not found" });
    }

    const searchAppear = await SearchAppearance.findOne({
      searchId: searches.uniqueId,
    });

    const finalData = {
      ...searches,
      searched: searchAppear?.searched || 0, // fallback if no match found
    };

    return res.status(200).json(finalData);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
