import { GraphQLObjectType, GraphQLString } from 'graphql'

export const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: {
    _id: {
      type: GraphQLString
    },
    ncm: {
      description: 'Código NCM do produto',
      type: GraphQLString
    },
    inStoreCode: {
      description: 'Código do produto no estabelecimento',
      type: GraphQLString
    },
    sysCode: {
      description: 'Código interno do produto',
      type: GraphQLString
    },
    searchableTags: {
      description: 'Tags de busca do produto',
      type: GraphQLString
    },
    name: {
      description: 'Nome do produto',
      type: GraphQLString
    },
    description: {
      description: '',
      type: GraphQLString
    },
    unit: {
      description: 'Unidade de consumo (kg, m, peça etc)',
      type: GraphQLString
    },
    minStock: {
      description: 'Estoque mínimo',
      type: GraphQLString
    },
    depotAddress: {
      description: 'Endereço do almoxarifado',
      type: GraphQLString
    },
    inputDate: {
      description: 'Data do evento de entrada do produto',
      type: GraphQLString
    },
    inputQuantity: {
      description: 'Quantidade de entrada do produto',
      type: GraphQLString
    },
    inputValue: {
      description: 'Valor do custo de entrada do estoque atual',
      type: GraphQLString
    }
    // valor do custo médio anual de aquisição do produto
  }
})
