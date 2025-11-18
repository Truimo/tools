import { useState } from 'react'

export const TextTransform = () => {
    const [text, setText] = useState('')

    return (
        <div className="flex flex-col gap-4 w-full max-w-xl mx-auto p-4">
            {/* 输入区 */}
            <div className="flex flex-col">
                <label className="mb-1 font-semibold">输入文本</label>
                <textarea
                    className="border rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="请输入内容..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            {/* 小写输出 */}
            <div className="flex flex-col">
                <label className="mb-1 font-semibold">全部小写</label>
                <textarea
                    className="border bg-gray-100 rounded-lg p-3 h-28 resize-none cursor-not-allowed"
                    value={text.toLowerCase()}
                    readOnly
                />
            </div>

            {/* 大写输出 */}
            <div className="flex flex-col">
                <label className="mb-1 font-semibold">全部大写</label>
                <textarea
                    className="border bg-gray-100 rounded-lg p-3 h-28 resize-none cursor-not-allowed"
                    value={text.toUpperCase()}
                    readOnly
                />
            </div>
        </div>
    )
}
