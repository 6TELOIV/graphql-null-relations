import { CollectionConfig } from "payload";

export const Demo: CollectionConfig = {
    slug: 'demo',
    access: {
        read: ({ req: { user } }) => {
            if (user) {
                return true;
            }
            return {
                visible: {
                    equals: true
                }
            }
        }
    },
    fields: [
        {
            name: 'visible',
            type: 'checkbox',
        },
    ],
}
