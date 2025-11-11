import React, {ReactNode} from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
    return(
        <div className="w-full flex flex-col items-center justify-start md:w-7xl px-3">
            {children}
        </div>
    )
}