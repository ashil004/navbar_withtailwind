import { LineChart as LChart , Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const ictMarks=[
        {id:1,name:"alen",ict:41},
        {id:2,name:"blean",ict:56},
        {id:3,name:"gralen",ict:84},
        {id:4,name:"aflen",ict:10},
        {id:5,name:"axalen",ict:90},
        {id:6, name:"jeckson",ict:2}
    ]

    return (
        <div>
            <LChart width={1400} height={700} 
            data={ictMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="ict"></YAxis>
            <Line type="monotone" dataKey="ict"  />

            </LChart>
            <h3 className="text-3xl text-bold text-center ">1st Tram Exam Ict Result Chart </h3>
            
            
        </div>
    );
};

export default LineChart;