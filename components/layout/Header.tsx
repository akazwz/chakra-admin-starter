import { Flex, HStack, IconButton } from '@chakra-ui/react'
import { HamburgerButton } from '@icon-park/react'
import { FlexProps } from '@chakra-ui/react'

import { UserMenu } from '../UserMenu'

interface IProps extends FlexProps{
	onOpen: () => void;
	mini: boolean
}

export const DashboardHeader = ({ onOpen, mini, ...rest }: IProps) => {
	return (
		<Flex
			ml={{ base: 0, md: mini ? 20 : 60 }}
			px={{ base: 4, md: 4 }}
			alignItems="center"
			borderBottomWidth={1}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				aria-label={'open menu'}
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				icon={<HamburgerButton />}
			/>
			<HStack>
				<UserMenu name={'akazwz'} email={'akazwz@pm.me'} />
			</HStack>
		</Flex>
	)
}
