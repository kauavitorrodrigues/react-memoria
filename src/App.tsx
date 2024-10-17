import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png"
import iconSvg from "./svgs/restart.svg"
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";
import { Items } from "./data/Items";
import { GridItem } from "./components/GridItem";
import { formatTimeElapsed } from "./utils/formatTimeElapsed";

const App = () => {

	
	const [playing, setIsPlaying] = useState<boolean>(false)
	const [timeElapsed, setTimeElapsed] = useState<number>(0)
	const [moveCount, setMoveCount] = useState<number>(0)
	const [shownCount, setShownCount] = useState<number>(0)
	const [gridItems, setGridItems] = useState<GridItemType[]>([])

	useEffect(() => handleStartGame(), [])
	
	useEffect(() => {

		if (moveCount > 0 && gridItems.every( item => item.permanentShown )) {
		
			setIsPlaying(false)
			
		}

	}, [ moveCount, gridItems ])

	useEffect(() => {

		const timer = setInterval(() => {
			if (playing) { setTimeElapsed(timeElapsed + 1) }
		}, 1000);
		
		return () => clearInterval(timer)

	}, [ playing, timeElapsed ])

	useEffect(() => {

		if (shownCount === 2) {

			let opened = gridItems.filter(item => item.shown)

			if (opened.length === 2) {

				let tempGrid = [...gridItems]

				if (opened[0].item === opened[1].item) {

					for (let i in tempGrid) {

						if (tempGrid[i].shown) {

							tempGrid[i].permanentShown = true
							tempGrid[i].shown = false
							
						}	
						
					}

				} else {

					for (let i in tempGrid) {

						setTimeout(() => {

							tempGrid[i].shown = false
							
						}, 300);
						
					}

				}

				setGridItems(tempGrid)
				setShownCount(0)
				setMoveCount(moveCount => moveCount + 1)
				
			}
			
		}

	}, [ shownCount, gridItems ])

	const handleStartGame = () => {

		setTimeElapsed(0)
		setMoveCount(0)
		setShownCount(0)

		let tempGrid: GridItemType[] = []

		for (let i = 0; i < (Items.length * 2); i++) tempGrid.push({
			item: null, permanentShown: false, shown: false
		})

		for (let w = 0; w < 2; w++) {

			for (let i = 0; i < Items.length; i++) {

				let pos = -1

				while ( pos < 0 || tempGrid[pos].item !== null) {

					pos = Math.floor(Math.random() * (Items.length * 2))
		
				}

				tempGrid[pos].item = i

			}

		}

		setGridItems(tempGrid)
		setIsPlaying(true)

	}

	const handleItemClick = (index: number) => {

		if (playing && index !== null && shownCount < 2 ) {
			
			let tempGrid = [...gridItems]

			if ( tempGrid[index].permanentShown === false && tempGrid[index].shown === false ) {
				tempGrid[index].shown = true
				setShownCount( shownCount + 1 )
			}

			setGridItems(tempGrid)

		}

	}

	return (

		<C.Body>

			<C.Container>

				<C.info>

					<C.logoLink href=''>
						<img src={logoImage} width={200}/>
					</C.logoLink>

					<C.infoArea> 
						<InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)}/> 
						<InfoItem label="Movimentos" value={moveCount.toString()}/>
					</C.infoArea>

					<Button label="Reiniciar" icon={iconSvg} onClick={handleStartGame} ></Button>

				</C.info>

				<C.GridArea>
					<C.Grid>
						{ gridItems.map((item, index) => (
							<GridItem
								key={index} 
								item={item} 
								onClick={() => handleItemClick(index)}
							/>
						))}
					</C.Grid>
				</C.GridArea>

			</C.Container>

		</C.Body>

	)

}

export default App