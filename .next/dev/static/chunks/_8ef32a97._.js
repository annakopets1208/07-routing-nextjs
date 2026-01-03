(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/notes/[id]/NoteDetails.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backBtn": "NoteDetails-module__lN3cYq__backBtn",
  "container": "NoteDetails-module__lN3cYq__container",
  "content": "NoteDetails-module__lN3cYq__content",
  "date": "NoteDetails-module__lN3cYq__date",
  "header": "NoteDetails-module__lN3cYq__header",
  "item": "NoteDetails-module__lN3cYq__item",
  "main": "NoteDetails-module__lN3cYq__main",
  "tag": "NoteDetails-module__lN3cYq__tag",
});
}),
"[project]/app/notes/[id]/NoteDetails.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/[id]/NoteDetails.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NoteDetailsClient = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "e2cf1acbce8d04b6041b663eb876f1ff2a67287edfed9c9ce995d9e2c0601ae0") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2cf1acbce8d04b6041b663eb876f1ff2a67287edfed9c9ce995d9e2c0601ae0";
    }
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== id) {
        t0 = {
            queryKey: [
                "note",
                id
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNoteById"])(id),
            refetchOnMount: false
        };
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
    let t1;
    if ($[3] !== router) {
        t1 = ()=>{
            const isSure = confirm("Are you sure?");
            if (isSure) {
                router.back();
            }
        };
        $[3] = router;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleGoBack = t1;
    if (isLoading) {
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    if (error || !data) {
        let t2;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Some error.."
            }, void 0, false, {
                fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 64,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        return t2;
    }
    const formattedDate = data.updatedAt ? `Updated at: ${data.updatedAt}` : `Created at: ${data.createdAt}`;
    let t2;
    if ($[7] !== handleGoBack) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleGoBack,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
            children: "Go Back"
        }, void 0, false, {
            fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = handleGoBack;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const t3 = data?.title;
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t3
            }, void 0, false, {
                fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 83,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = data?.content;
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: t5
        }, void 0, false, {
            fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = data?.createdAt;
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== formattedDate) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = formattedDate;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t2 || $[18] !== t4 || $[19] !== t6 || $[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                    children: [
                        t2,
                        t4,
                        t6,
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
                    lineNumber: 117,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/notes/[id]/NoteDetails.client.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[17] = t2;
        $[18] = t4;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
};
_s(NoteDetailsClient, "MEXIr/yzZ+dVyKFZ8wvfXbFmv2k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NoteDetailsClient;
const __TURBOPACK__default__export__ = NoteDetailsClient;
var _c;
__turbopack_context__.k.register(_c, "NoteDetailsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8ef32a97._.js.map