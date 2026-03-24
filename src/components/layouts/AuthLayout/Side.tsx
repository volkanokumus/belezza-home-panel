import type { CommonProps } from '@/@types/common'
import { cloneElement } from 'react'

type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    const Background =
        '/img/others/OMV_Illustration_Decorative_Deep-Blue-Neon-Green-RGB.png'
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

                backgroundPosition: 'center',
            }}
            className="flex h-full p-6 bg-white dark:bg-gray-800"
        >
            <div className=" flex flex-col justify-center items-center flex-1">
                <div className="w-full bg-white  xl:max-w-[450px] p-8 border border-[#8FAAEF] rounded-lg max-w-[380px]">
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
            {/* <div className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]">
                <img
                    src="/img/others/login_bg.jpg"
                    className="absolute h-full w-full top-0 left-0 rounded-3xl"
                />
            </div> */}
        </div>
    )
}

export default Side
