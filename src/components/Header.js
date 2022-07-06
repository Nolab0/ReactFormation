function Header() {
    let title = "The Facebook";
    const onClickHandler = () => console.log("clicked");

    return (
        <>
            <h1>{title}</h1>
            <button onClick={onClickHandler}>Click here</button>
        </>
    )
}

export default Header;