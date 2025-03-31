import type { PageTitleProps } from "../../../types/components/props/props";

const PageTitle = ({
    title
}: PageTitleProps) => {
    return (
        <div className="w-[100%] h-[100px] bg-gray-500 text-custom-gray flex justify-center items-center">
            KK
            <h1 className="text-[50px]">
                {title}
            </h1>
        </div>
    )
}

export default PageTitle;