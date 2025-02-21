import PageHead from "@/components/commons/PageHead";
import { Children, ReactNode } from "react";

interface PropTypes {
    title?: string;
    children: ReactNode
}

const AuthLayout = (props: PropTypes) => {
    const { title, children } = props;
    return (
        <>
            <PageHead title={ title} />
            <section className="-full max-w-screen-3xl px-6">
                {children}
            </section>
        </>

    );
};

export default AuthLayout;

