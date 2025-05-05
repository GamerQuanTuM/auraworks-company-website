import React from "react";
import Client from "./client";
import { axiosInstance } from "@/lib/axiosInstance";

export type Content = {
  id: string;
  planner_days: number;
  designer_days: number;
  developer_days: number;
  created_at: Date;
  updated_at: Date;
  feature_name: string;
};

type Response = {
  data: Content[];
  success: boolean;
};

const Estimate = async () => {
  const { data } = await axiosInstance.get<Response>("/quotation");
  return <Client content={data.data} />;
};

export default Estimate;
