import { CurrencyType } from "../types";

export async function changeCurrency(mode: string): Promise<CurrencyType> {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?base=USD&symbols=${mode}`,
      {
        method: "GET",
        headers: { accept: "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to change currency");
    }
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error occurred"); 
  }
}
