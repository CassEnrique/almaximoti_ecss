import { getCookies } from "@/utils/cookies";
import { REQUEST_HEADERS } from "@/utils/props";
import { FormProducts, FormSupplier } from "./interface";

const service: string | undefined = process.env.URI_API;
const version: string | undefined = process.env.URI_VER;
const apiProduct: string = "suppliers";

export async function getAll(module: string): Promise<any> {
  const res: Response = await fetch(`${service}${version}/${module}/`, {
    method: "GET",
    ...REQUEST_HEADERS,
  } as RequestInit);

  return await res.json();
}

export async function getPk(module: string, pk: string | number): Promise<any> {
  const res: Response = await fetch(`${service}${version}/${module}/${pk}/`, {
    method: "GET",
    ...REQUEST_HEADERS,
  } as RequestInit);

  return await res.json();
}

export async function createRecord(
  module: string,
  payload: FormProducts | FormSupplier,
): Promise<any> {
  const res: Response = await fetch(`${service}${version}/${module}/`, {
    method: "POST",
    ...REQUEST_HEADERS,
    body: JSON.stringify(payload),
  } as RequestInit);

  return await res.json();
}

export async function putRecord(module: string, pk string | number, payload: any): Promise<any> {
  const res: Response = await fetch(`${service}${version}/${module}/${pk}/`, {
    method: "PUT",
    ...REQUEST_HEADERS,
    body: JSON.stringify(payload),
  } as RequestInit);

  return await res.json();
}

export async function deleteRecord({
  module,
  pk,
}: {
  module: string;
  pk: number | string;
}): Promise<any> {
  const res: Response = await fetch(`${service}${version}/${module}/${pk}/`, {
    method: "DELETE",
    ...REQUEST_HEADERS,
  } as RequestInit);

  return await res.json();
}
