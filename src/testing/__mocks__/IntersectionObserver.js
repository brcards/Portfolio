/**
 * Mock implementation of IntersectionObserver. Static methods allow
 * tests to easily call methods on embedded instances
 *
 * @type {IntersectionObserver}
 */
let MockIntersectionObserver = class IntersectionObserver {
    static isIntersecting = false;
    static observerCallback;

    constructor(observerCallback, options = {}) {
        IntersectionObserver.observerCallback = observerCallback;
    }

    disconnect() {
        return null;
    }

    observe() {
        return null;
    }

    takeRecords() {
        return null;
    }

    unobserve() {
        return null;
    }

    static triggerObservers(isIntersecting) {
        let entry = {
            isIntersecting: isIntersecting
        };
        this.observerCallback([entry]);
    }
};

const setupMockIntersectionObserver = () => {
    Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver,
    });

    Object.defineProperty(global, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: MockIntersectionObserver,
    });
};

export {setupMockIntersectionObserver, MockIntersectionObserver};