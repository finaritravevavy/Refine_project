// // // 'use client';
// // // import { Refine } from "@refinedev/core";
// // // import routerProvider from "@refinedev/nextjs-router";
// // // import { dataProvider } from "@providers/data-provider";
// // // import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

// // // export default function Sidebar(){
// // //     return <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">Sidebar</div>;
// // //     <Refine
// // //                 routerProvider={routerProvider}
// // //                 dataProvider={dataProvider}
// // //                 resources={[
// // //                   {
// // //                     name: "blog_posts",
// // //                     list: "/blog-posts",
// // //                     create: "/blog-posts/create",
// // //                     edit: "/blog-posts/edit/:id",
// // //                     show: "/blog-posts/show/:id",
// // //                     meta: {
// // //                       canDelete: true,
// // //                     },
// // //                   },
// // //                   {
// // //                     name: "categories",
// // //                     list: "/categories",
// // //                     create: "/categories/create",
// // //                     edit: "/categories/edit/:id",
// // //                     show: "/categories/show/:id",
// // //                     meta: {
// // //                       canDelete: true,
// // //                     },
// // //                   },
// // //                   {
// // //                     name: "personne",
// // //                     list: "/personne",
// // //                     create: "/personne/create",
// // //                     edit: "/personne/edit/:id",
// // //                     show: "/personne/show/:id",
// // //                     meta: {
// // //                       canDelete: true,
// // //                     },
// // //                   },
// // //                   {
// // //                     name: "dashbord",
// // //                     list: "/dashbord",
// // //                   },
// // //                 ]}
// // //                 options={{
// // //                   syncWithLocation: true,
// // //                   warnWhenUnsavedChanges: true,
// // //                   useNewQueryKeys: true,
// // //                   projectId: "bXcm0B-13GfX0-kusURQ",
// // //                 }}
// // //               >
// // //                 <RefineKbar />
// // //               </Refine>
// // // }

// // 'use client';

// // import { Refine } from "@refinedev/core";
// // import routerProvider from "@refinedev/nextjs-router";
// // import { dataProvider } from "@providers/data-provider";
// // import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

// // export default function Sidebar() {
// //     return (
// //         <Refine
// //             routerProvider={routerProvider}
// //             dataProvider={dataProvider}
// //             resources={[
// //                 {
// //                     name: "blog_posts",
// //                     list: "/blog-posts",
// //                     create: "/blog-posts/create",
// //                     edit: "/blog-posts/edit/:id",
// //                     show: "/blog-posts/show/:id",
// //                     meta: {
// //                         canDelete: true,
// //                     },
// //                 },
// //                 {
// //                     name: "categories",
// //                     list: "/categories",
// //                     create: "/categories/create",
// //                     edit: "/categories/edit/:id",
// //                     show: "/categories/show/:id",
// //                     meta: {
// //                         canDelete: true,
// //                     },
// //                 },
// //                 {
// //                     name: "personne",
// //                     list: "/personne",
// //                     create: "/personne/create",
// //                     edit: "/personne/edit/:id",
// //                     show: "/personne/show/:id",
// //                     meta: {
// //                         canDelete: true,
// //                     },
// //                 },
// //                 {
// //                     name: "dashbord",
// //                     list: "/dashbord",
// //                 },
// //             ]}
// //             options={{
// //                 syncWithLocation: true,
// //                 warnWhenUnsavedChanges: true,
// //                 useNewQueryKeys: true,
// //                 projectId: "bXcm0B-13GfX0-kusURQ",
// //             }}
// //         >
// //             <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
// //                 Sidebar
// //             </div>
// //             <RefineKbar />
// //         </Refine>
// //     );
// // }

// 'use client';

// import { Refine } from "@refinedev/core";
// import routerProvider from "@refinedev/nextjs-router";
// import { dataProvider } from "@providers/data-provider";
// import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

// export default function Sidebar() {
//     return (
//         <RefineKbarProvider>
//             <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
//                 Sidebar
//             </div>
//         </RefineKbarProvider>
//     );
// }

'use client';

import { RefineKbarProvider } from "@refinedev/kbar";
import { AreaChart } from "recharts";

export default function Sidebar({ resources }: { resources: any[] }) {
    return (
        <RefineKbarProvider>
            <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
                <ul>
                    {resources.map((resource) => (
                        <li key={resource.name}>
                            <a href={resource.list}>{resource.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </RefineKbarProvider>
    );
}
