"use client";

import {
    Close,
    Content,
    Description,
    Overlay,
    Portal,
    Root,
    Title as DTitle,
} from "@radix-ui/react-dialog";

import "@/styles/dialog.scss";

export default function Dialog({ open, setOpen, children }) {
    return (
        <Root open={open} onOpenChange={setOpen}>
            <Portal>
                <Overlay className="dialogOverlay" />
                <Content className="dialogContent">
                    <DTitle />
                    <Description asChild>{children}</Description>
                </Content>
            </Portal>
        </Root>
    );
}
