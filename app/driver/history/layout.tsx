'use client'
import React,{ReactNode,useEffect,useState} from 'react'
import DatePicker from 'react-datepicker';
import { Calendar1Icon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setDate,setView } from '@/app/store/features/driverSlice';

export default function RootLayout({children} : {children : ReactNode}){
  const dispatch=useAppDispatch()
  const view=useAppSelector((state)=>state.driver.view)
  const date = useAppSelector((state) => state.driver.date)

  useEffect(
    ()=>{}
    , [useAppSelector((state) => state.driver.date)])
  return (
  <>
    <div className="w-full md:w-4xl flex flex-row items-center justify-between p-2">
                <h2 className="text-xl md:text-2xl text-black font-semibold">
                    Active Delivery
                </h2>
                <div className="flex flex-row items-center gap-2 md:gap-6 justify-center flex-wrap">
                    <DatePicker
                        calendarClassName="border border-red-200 shadow-lg rounded-lg p-2"
                        selected={new Date(date)}
                        onChange={(date: Date | null) => {
                            dispatch(setDate(date?date.toISOString():new Date().toISOString()));
                            if (date) {
                              dispatch(setDate(date ? date.toISOString() : new Date().toISOString()));
                              dispatch(setView("date"));
                            }
                        }}
                        customInput={
                            <button
                                className={`mt-1 flex flex-row items-center font-semibold justify-around gap-2 px-2 rounded-md bg-white p-[.5px] ${view !== "ongoing" && view !== "delivered"
                                        ? "border border-yellow-500 bg-yellow-500 text-white"
                                        : "border border-gray-400 bg-white"
                                    } `}
                            >
                                <Calendar1Icon />
                                {date ? (
                              <p>{date ? new Date(date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }) : ""}</p>
                                ) : (
                                    ""
                                )}
                            </button>
                        }
                        popperClassName="z-50"
                        showPopperArrow={false}
                    />

                    <button
                        className={`px-2 font-semibold rounded-md  ${view === "ongoing"
                                ? "border border-yellow-500 bg-yellow-500 text-white"
                                : "border border-gray-400 bg-white"
                            }`}
                        onClick={() => dispatch(setView("ongoing"))}
                    >
                        Ongoing
                    </button>
                    <button
                        className={`px-2 font-semibold rounded-md bg-white ${view === "delivered"
                                ? "border border-yellow-500 bg-yellow-500 text-white"
                                : "border border-gray-400 bg-white"
                            }`}
            onClick={() => dispatch(setView("delivered"))}
                    >
                        Delivered
                    </button>
                </div>
            </div>
    
      {children}
      </>
  )
}

