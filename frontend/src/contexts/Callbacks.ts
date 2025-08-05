import {
  AllDegreeAndInstituteProps,
  AllLanaguagesProps,
  AllSkillsProps,
  PropertyProps,
} from "@/types/types";

type WorkingHoursPerDay = {
  open?: string;
  close?: string;
};

type WorkingHoursData = {
  [day in
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"]?: WorkingHoursPerDay;
};
export function formatDateTime(dateString: string | Date) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-IN", { month: "short" });
  const year = date.getFullYear();

  const time = date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    day,
    month,
    year,
    time,
  };
}
export const stripHtmlAndLimit = (html: string, limit = 180) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

export const getAverageRating = (reviews?: { rating?: number }[]) => {
  if (!Array.isArray(reviews) || reviews.length === 0) return 0;
  const total = reviews.reduce((acc, curr) => acc + (curr.rating || 0), 0);
  return (total / reviews.length).toFixed(1);
};
export const transformWorkingHours = (data: WorkingHoursData) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ] as const;

  return days.map((day) => {
    const open = data?.[day]?.open || "";
    const close = data?.[day]?.close || "";
    return {
      day: day.charAt(0).toUpperCase() + day.slice(1),
      openTime: open,
      closeTime: close,
      isOpen: !!(open && close),
    };
  });
};

export const formatTo12Hour = (time: string) => {
  if (!time) return "";
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const getLanguageNameById = (
  id: number,
  allLanguages: AllLanaguagesProps[]
) => {
  const language = allLanguages?.find(
    (item) => Number(item.uniqueId) === Number(id)
  );
  return language?.language;
};

export const getSkillNameById = (id: number, allSKills: AllSkillsProps[]) => {
  const skill = allSKills?.find((item) => Number(item.uniqueId) === Number(id));
  return skill?.skill;
};

export const getPropertyDetails = (id: number, properties: PropertyProps[]) => {
  const property = properties.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return property;
};

export const getDegreeById = (
  id: number,
  allDegreeAndInst: AllDegreeAndInstituteProps
) => {
  const degree = allDegreeAndInst?.degree?.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return degree?.degree_name;
};
export const getInstituteById = (
  id: number,
  allDegreeAndInst: AllDegreeAndInstituteProps
) => {
  const institute = allDegreeAndInst?.institute?.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return institute?.institute_name;
};

export const formatToMonthInput = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};
