async function takeTime(){
await new Promise((resolve) => {
setTimeout(resolve,3000);
})
}


export default async function about() {
    await takeTime();
    throw new Error("This Is Manual Error In About Page");
    return (
        <div>
            <h1>this is about page</h1>
        </div>
    )
}