import Button from '@/ui/Button'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "خانه",
  description: "develop by mohamad yaghma",
};

export default function Home() {
  return (
    <div> 
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلگ ها
      </h1>
      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جای که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی <br />
          بتونی بلگ بسازی و کامنت بزاری و در پنل همه چیزو رصد کنی
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline"> 
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
