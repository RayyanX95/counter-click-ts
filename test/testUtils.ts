import { ShallowWrapper } from "enzyme";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => wrapper.find(`[data-test="${val}"]`);