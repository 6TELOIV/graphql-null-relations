import { GlobalConfig } from "payload";

export const DemoGlobal: GlobalConfig = {
    slug: 'demoGlobal',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'demoRelationship',
            type: 'relationship',
            relationTo: 'demo',
            hasMany: true,
        }
    ],
}
