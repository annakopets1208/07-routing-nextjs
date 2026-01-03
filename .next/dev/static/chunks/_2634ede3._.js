(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__sR2AWG__backdrop",
  "modal": "Modal-module__sR2AWG__modal",
});
}),
"[project]/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "74b2f75fa93aeefddada141a727341e9c94bd61a59f8180688678164255b98f8") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74b2f75fa93aeefddada141a727341e9c94bd61a59f8180688678164255b98f8";
    }
    const { onClose, children } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = ({
            "Modal[handleBackdropClick]": (event)=>{
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }
        })["Modal[handleBackdropClick]"];
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleBackdropClick = t1;
    let t2;
    let t3;
    if ($[3] !== onClose) {
        t2 = ({
            "Modal[useEffect()]": ()=>{
                const handleKeyDown = {
                    "Modal[useEffect() > handleKeyDown]": (event_0)=>{
                        if (event_0.key === "Escape") {
                            onClose();
                        }
                    }
                }["Modal[useEffect() > handleKeyDown]"];
                document.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "";
                };
            }
        })["Modal[useEffect()]"];
        t3 = [
            onClose
        ];
        $[3] = onClose;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== handleBackdropClick || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
                role: "dialog",
                "aria-modal": "true",
                onClick: handleBackdropClick,
                children: t4
            }, void 0, false, {
                fileName: "[project]/components/Modal/Modal.tsx",
                lineNumber: 77,
                columnNumber: 25
            }, this)
        }, void 0, false), document.body);
        $[8] = handleBackdropClick;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "fetchNotesByTag",
    ()=>fetchNotesByTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const myKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrb3BjMjAxMkBnbWFpbC5jb20iLCJpYXQiOjE3NjQwNzM2MTF9.M9EXBLVA6kog0gyjxXDRq882tQCpWgg03CcOWaOU3R4");
const fetchNotes = async (title, page, tag)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://notehub-public.goit.study/api/notes", {
        params: {
            search: title,
            perPage: 12,
            page,
            ...tag ? {
                tag
            } : {}
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
const deleteNote = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`https://notehub-public.goit.study/api/notes/${id}`, {
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    });
};
const createNote = async (note)=>{
    const createResp = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://notehub-public.goit.study/api/notes/", note, {
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    });
    return createResp.data;
};
const fetchNoteById = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://notehub-public.goit.study/api/notes/${id}`, {
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    });
    return res.data;
};
const fetchNotesByTag = async (tag)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://notehub-public.goit.study/api/notes", {
        params: {
            perPage: 12,
            ...tag ? {
                tag
            } : {}
        },
        headers: {
            Authorization: `Bearer ${myKey}`
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
    if ($[0] !== "0f7fdd277e072e3ba06b6d0ca7db7d7410a8453b1bec97c684236ffd53147694") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f7fdd277e072e3ba06b6d0ca7db7d7410a8453b1bec97c684236ffd53147694";
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
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn
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
"[project]/components/NotePreview/NotePreview.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backBtn": "NotePreview-module__6YN4eq__backBtn",
  "container": "NotePreview-module__6YN4eq__container",
  "content": "NotePreview-module__6YN4eq__content",
  "date": "NotePreview-module__6YN4eq__date",
  "header": "NotePreview-module__6YN4eq__header",
  "item": "NotePreview-module__6YN4eq__item",
  "tag": "NotePreview-module__6YN4eq__tag",
});
}),
"[project]/components/NotePreview/NotePreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/notes/[id]/NoteDetails.client.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotePreview$2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NotePreview/NotePreview.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NotePreview = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "10aed03cfb89f24b8a7974f0a91ca65f10f005d68a8821473bae5fa2647694df") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10aed03cfb89f24b8a7974f0a91ca65f10f005d68a8821473bae5fa2647694df";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== router) {
        t0 = ()=>router.back();
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== router) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotePreview$2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
            onClick: ()=>router.back(),
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/components/NotePreview/NotePreview.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = router;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotePreview$2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f5b$id$5d2f$NoteDetails$2e$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/NotePreview/NotePreview.tsx",
                lineNumber: 35,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/NotePreview/NotePreview.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotePreview$2f$NotePreview$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/NotePreview/NotePreview.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t0 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: t0,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/NotePreview/NotePreview.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t0;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
};
_s(NotePreview, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotePreview;
const __TURBOPACK__default__export__ = NotePreview;
var _c;
__turbopack_context__.k.register(_c, "NotePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2634ede3._.js.map