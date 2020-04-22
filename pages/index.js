import dynamic from 'next/dynamic';

const CustomHeader = dynamic(
    () => import('../components/Header/Header'),
    { ssr : false}
);

const Index = () => (
    <div>
        <CustomHeader />
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
        <h1> Test </h1>
    </div>
)

export default Index