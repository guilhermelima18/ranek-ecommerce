import { api } from "./api";

export function useGetProdutos() {
  const getProdutos = async (urlParams) => {
    try {
      const response = await api.get(
        `/produto/?_limit=${urlParams.perPage}${urlParams.queryUrl}`
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getProduto = async (productId) => {
    try {
      const response = await api.get(`/produto/${productId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProdutos,
    getProduto,
  };
}
