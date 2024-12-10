import { CurrencyType } from "../types";

export async function changeCurrency(mode: string): Promise<CurrencyType> {
  try {
    const res = await fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_ebGf9K4JtcITk6nukSJ2Aos9ckpypZuZQ3SaC2ZL&currencies=${mode}`
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
