import Spinner from '@/ui/Spinner'
import React from 'react'

export default function loading() {
  return (
    <div className="flex flex-col items-center gap-x-4">
      <span className="text-ls text-secondary-500">در حال بارگذاری پست ها</span>
      <Spinner />
    </div>
  )
}
