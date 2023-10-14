import React from 'react';
import Card from './Card';

const ResultsData = ({results}) => {
    return (
        <div className='sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {
                results.map((result)=>(
                    <div key={result.id}>
                            <Card key={result.id} result={result}>


                            </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default ResultsData;