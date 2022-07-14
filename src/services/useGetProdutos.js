import { api } from "./api";

export function useGetProdutos() {
  const getProdutos = async (urlParams) => {
    try {
      const response = await api.get(`/produto/?_limit=9${urlParams}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProdutos,
  };
}
