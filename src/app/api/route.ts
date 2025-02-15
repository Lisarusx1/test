import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    statistic: {
      viewsChange: 5.5,
      contactsChange: -100,
      ordersChange: -100,
      days: [
        { day: "21, сб", views: 15, contacts: 0, favorite: 2, orders: 0 },
        { day: "22, вс", views: 520, contacts: 0, favorite: 0, orders: 0 },
        { day: "23, пн", views: 56, contacts: 0, favorite: 5, orders: 0 },
        { day: "24, вт", views: 67, contacts: 0, favorite: 0, orders: 0 },
        { day: "25, ср", views: 3, contacts: 0, favorite: 0, orders: 0 },
        { day: "26, чт", views: 5, contacts: 0, favorite: 0, orders: 0 },
        { day: "27, пт", views: 9, contacts: 0, favorite: 0, orders: 0 },
      ],
    },
    serviceLevel: { value: 60 },
    promotionActivity: { value: 2 },
    income: {
      total: 56_000,
      lastYear: 48_000,
      lastMonth: 8_600,
      lastWeek: 2_000,
    },
    advertisements: {
      active: 14,
      notActive: 2,
      draft: 3,
      sold: 0,
    },
  };

  return NextResponse.json(data);
}
