import type { Schema, Struct } from '@strapi/strapi';

export interface SharedValor extends Struct.ComponentSchema {
  collectionName: 'components_shared_valors';
  info: {
    displayName: 'Valor';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.valor': SharedValor;
    }
  }
}
