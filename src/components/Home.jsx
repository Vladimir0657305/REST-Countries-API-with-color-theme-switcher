export default function Home({ countries, setCountries }){
    // console.log(countries[0]['flags']['png']);
    console.log(countries[0]);
    return(
        <>
            <div className="block-home">
                {
                // countries.map(c => (c['flags']['png']))
                countries.map(c => 
                <img src={c['flags']['png']} />
                    // <p key={c.name}>{c.name}</p>
                )
                }
            </div>
        </>
    );
}