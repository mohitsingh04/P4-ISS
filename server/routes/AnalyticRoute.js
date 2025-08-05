import bodyParser from "body-parser";
import express from "express";
import {
  addPropertyScore,
  getPropertyScoreById,
} from "../AnalyticController/PropertyScoreController.js";
import {
  addSeoScore,
  getSeoScoreById,
} from "../AnalyticController/SeoScoreController.js";
import {
  createOrUpdateTraffic,
  getTrafficByPropertyId,
} from "../AnalyticController/TrafficController.js";
import { getEnquiryCountByPropertyId } from "../AnalyticController/EnquiryCountController.js";
import {
  AssignRankToAllProperties,
  getAllRanks,
  getRankByPropertyId,
} from "../AnalyticController/RankController.js";
import {
  addSearch,
  getAllSearches,
  getSearchesById,
} from "../AnalyticController/SearchController.js";
import { AddCompare } from "../AnalyticController/CompareModal.js";

const analyticRouter = express.Router();
analyticRouter.use(bodyParser.json());
analyticRouter.use(bodyParser.urlencoded({ extended: true }));

analyticRouter.get("/analytics/rank/all", AssignRankToAllProperties);
//? Property Score
analyticRouter.post("/property/score/add", addPropertyScore);
analyticRouter.get("/property/score/:property_id", getPropertyScoreById);

//? SEO Score
analyticRouter.get("/property/seo/score/:property_id", getSeoScoreById);

//?Traffic Score
analyticRouter.post(`/property/traffic`, createOrUpdateTraffic);
analyticRouter.get(`/property/traffic/:property_id`, getTrafficByPropertyId);

//?Enquire Score
analyticRouter.get(
  `/property/enquiry/count/:property_id`,
  getEnquiryCountByPropertyId
);

//? Ranks
analyticRouter.get(`/property/rank/:property_id`, getRankByPropertyId);
analyticRouter.get(`/ranks`, getAllRanks);

//? Search
analyticRouter.post(`/search`, addSearch);
analyticRouter.get(`/search`, getAllSearches);
analyticRouter.get(`/search/:objectId`, getSearchesById);

//? Compare
analyticRouter.post(`/compare`, AddCompare);

export default analyticRouter;
