export const submitUserform = (data)=> async (dispatch)=>{
    console.log(data);
    const res = await fetch("http://localhost:8000/submit", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const out = await res.json();
    console.log(out.message);
}