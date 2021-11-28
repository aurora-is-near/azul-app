import auroraImage from '../src/images/aurora.jpeg'
import rainbowBridgeImage from '../src/images/rainbow-bridge.jpeg'
import lisboaImage from '../src/images/lisboa.jpeg'

const auroraKey =
    'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/aurora.jpeg'

const rainbowBridgeKey =
    'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/rainbow-bridge.jpeg'

const lisboaKey =
    'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/lisboa.jpeg'

const map = new Map()

map.set(auroraKey, auroraImage)
map.set(rainbowBridgeKey, rainbowBridgeImage)
map.set(lisboaKey, lisboaImage)
export default map
