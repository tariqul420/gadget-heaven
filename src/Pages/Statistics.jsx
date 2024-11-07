import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData()

    useEffect(() => {
        document.title = 'Statistics | Gadget Heaven';
    }, []);

    return (
        <>
            <div className="bg-color-primary py-8">
                <h2 className="text-center text-white font-bold text-3xl">Statistics</h2>
                <p className="text-center text-white">Explore the latest gadgets that will take your experience <br className="max-sm:hidden" /> to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="w-11/12 mx-auto mt-8">
                <ResponsiveContainer width="100%" height={500}>
                    <ComposedChart data={data}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" />
                        <YAxis dataKey="price" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" barSize={30} fill="#9538e2" />
                        <Area type="monotone" dataKey="price" fill="#9538e280" stroke="#9538e299" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </>
    );
};

export default Statistics;