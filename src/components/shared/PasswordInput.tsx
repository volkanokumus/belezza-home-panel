import { Input, InputProps } from '@/components/ui/Input'
import type { MouseEvent, Ref } from 'react'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

interface PasswordInputProps extends InputProps {
    onVisibleChange?: (visible: boolean) => void
    ref?: Ref<HTMLInputElement>
}

const PasswordInput = (props: PasswordInputProps) => {
    const { onVisibleChange, ref, ...rest } = props

    const [pwInputType, setPwInputType] = useState('password')

    const handleMouseDown = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        setPwInputType('text')
        onVisibleChange?.(true)
    }

    const handleMouseUp = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        setPwInputType('password')
        onVisibleChange?.(false)
    }

    const handleMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        setPwInputType('password')
        onVisibleChange?.(false)
    }

    return (
        <Input
            {...rest}
            ref={ref}
            type={pwInputType}
            suffix={
                <span
                    className="cursor-pointer select-none text-xl"
                    role="button"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    {pwInputType === 'password' ? (
                        <HiOutlineEyeOff />
                    ) : (
                        <HiOutlineEye />
                    )}
                </span>
            }
        />
    )
}

export default PasswordInput
