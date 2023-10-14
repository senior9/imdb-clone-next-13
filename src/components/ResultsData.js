import React from 'react';

const ResultsData = ({results}) => {
    return (
        <div>
            {
                results.map((result)=>(
                    <div key={result.id}>
                            <p>{result.original_title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default ResultsData;