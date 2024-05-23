function Product({Title , Price , colour}){

    return (
        <div>
            <h1>{Title}</h1>
            {Price > 10 && <p>Discount 5 %</p>}
        </div>
    );
}

export default Product