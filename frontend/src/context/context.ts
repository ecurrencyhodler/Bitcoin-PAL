import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
    [
       
    ]

}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        question: 0,
        answer:
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)