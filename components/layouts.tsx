import { ReactNode } from 'react'

import { Layout } from './layout'

interface LayoutsProps{
	children: ReactNode
}

const Layouts = ({ children }: LayoutsProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	)
}

export default Layouts