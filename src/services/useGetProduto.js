import { api } from "./api";

export function useGetProduto() {
  const getProduto = async (produtoId) => {
    try {
      const response = await api.get(`/produto/${produtoId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProduto,
  };
}
