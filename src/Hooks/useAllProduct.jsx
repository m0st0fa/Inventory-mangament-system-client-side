import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProduct = () => {
    const axiosPublic = useAxiosPublic()
    const { data: product = [],refetch, isPending: loading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('addProduct')
            return res.data
        }
    })

    return [product, loading, refetch]
};

export default useAllProduct;