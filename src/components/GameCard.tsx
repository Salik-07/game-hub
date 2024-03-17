import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CricticScore from "./CricticScore";
import { Game } from "../hooks/useGames";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" marginY={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
