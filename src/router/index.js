import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import { useMemberStore } from "@/stores/member";
import { ref } from "vue";

const onlyAuthUser = async (to, from, next) => {
  const memberStore = useMemberStore();
  const { userInfo, isValidToken } = storeToRefs(memberStore);
  const { getUserInfo } = memberStore;

  let token = sessionStorage.getItem("accessToken");

  if (userInfo.value != null && token) {
    await getUserInfo(token);
  }
  if (!isValidToken.value || userInfo.value === null) {
    next({ name: "user-login" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Main.vue"),
    },

    {
      path: "/modify",
      name: "modify",
      beforeEnter: onlyAuthUser,
      component: () => import("@/views/ModifyView.vue"),
    },

    {
      path: "/myinfo",
      name: "myinfo",
      beforeEnter: onlyAuthUser,
      component: () => import("@/views/Myinfo.vue"),
    },

    {
      path: "/conqueredmountain",
      name: "conqueredmountain",
      beforeEnter: onlyAuthUser,
      component: () => import("@/views/ConqueredMountain.vue"),
    },

    {
      path: "/board",
      name: "board",
      beforeEnter: onlyAuthUser,
      component: () => import("../views/Board.vue"),
    },
    {
      path: "/plan",
      name: "plan",
      beforeEnter: onlyAuthUser,
      component: () => import("../views/Plan.vue"),
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      component: () => import("../views/MyPage.vue"),
    },
    {
      path: "/boardwriteCard",
      name: "boardwriteCard",
      beforeEnter: onlyAuthUser,
      component: () => import("../components/board/item/BoardwriteCard.vue"),
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/Regist.vue"),
    },
    {
      path: "/search",
      name: "search",
      beforeEnter: onlyAuthUser,
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/mountainview",
      name: "mountainview",
      beforeEnter: onlyAuthUser,
      component: () => import("@/views/MountainView.vue"),
    },
    {
      path: "/mountain/:id",
      name: "MountainDetail",
      beforeEnter: onlyAuthUser,
      component: () => import("../views/MountainView.vue"),
    },
    {
      path: "/boardview/:boardId",
      name: "boardview",
      beforeEnter: onlyAuthUser,
      component: () => import("@/views/BoardView.vue"),
    },
  ],
});

export default router;
