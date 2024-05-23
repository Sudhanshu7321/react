function FormHandler(event){
    event.preventDefault(); 
    console.log("Form Submmitted")
}

export default function Form()
{
    return (
        <form >
            <input type="text" placeholder="type somthing" />
            <button onClick={FormHandler}>Submit</button>
        </form>
    );
}