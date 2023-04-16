export * from './colors'
export * from './font-sizes'
export * from './font-weights'
export * from './fonts'
export * from './line-heights'
export * from './radii'
export * from './space'
/*

Por que foi criado um arquivo chamdo index.ts para exportar cores?

Para que no futuro, caso que das cores, eu possa simplismente importá-lo assim:

import { colors } from '@igniteds-ui/tokens'

Se eu fizesse sem o index.ts, eu teria isso:

import { colors } from '@igniteds-ui/tokens/colors'

*/