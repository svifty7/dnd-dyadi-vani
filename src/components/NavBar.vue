<template>
    <header class="header">
        <router-link
            to="/"
            class="logo"
        >
            <div class="logo__icon">
                <font-awesome-icon icon="fa-brands fa-d-and-d"/>
            </div>

            <div class="logo__text">
                D&D Дядюшки Вани
            </div>
        </router-link>

        <div class="links">
            <a
                v-for="(link, key) in links"
                :key="key"
                :href="link.url"
                target="_blank"
                class="link"
            >{{ link.name }}</a>
        </div>
    </header>
</template>

<script>
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        setup() {
            const links = ref([
                {
                    name: 'D&D5 Club',
                    url: '//dnd5.club'
                },
                {
                    name: 'Dice Roller',
                    url: '//dnddiceroller.com'
                }
            ]);

            return {
                links
            };
        }
    });
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 24px;
        padding: 0 48px;
        position: sticky;
        top: 0;
        left: 0;
        background-color: var(--bg-secondary);

        a {
            display: flex;
            align-items: center;
            font-weight: bold;
            padding: 12px 24px;
            color: var(--link-text-invert);

            &:hover {
                color: var(--link-hover-invert);
            }
        }
    }

    .logo {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;

        &__icon {
            font-size: 28px;
        }

        &__text {
            font-size: 18px;
            margin-left: 12px;
        }
    }

    .links {
        display: flex;
    }

    .link {
    }
</style>
