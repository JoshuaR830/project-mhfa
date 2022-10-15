import PageHeaderBar from "./PageHeaderBar";

const Layout = (props: { children: JSX.Element }) => {
    return (
        <>
            <PageHeaderBar></PageHeaderBar>
            <div>{props.children}</div>
        </>
    )
}

export default Layout;