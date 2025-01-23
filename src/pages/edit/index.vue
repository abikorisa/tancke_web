<script setup lang="ts">
import { ref } from 'vue'

const { $supabase } = useNuxtApp()

const nickName = ref<string>('')
const message = ref<string>('')

const saveMessage = async () => {
	if (!message.value.trim()) {
		alert('メッセージを入力してください')
		return
	}

	const { error } = await $supabase.from('messages').insert([
		{
			nickName: nickName.value || '匿名',
			message: message.value,
		},
	])

	if (error) {
		console.error('エラーが発生しました:', error.message)
		alert('データの保存に失敗しました')
	}
	else {
		alert('メッセージが保存されました')
		message.value = ''
		nickName.value = ''
	}
}
</script>

<template>
  <div class="bg-gray-50 p-4 rounded-md">
    <div class="mb-4">
      <label for="nickName" class="block text-sm font-medium">ニックネーム</label>
      <input
        id="nickName"
        v-model="nickName"
        type="text"
        class="mt-1 block w-full p-2 border rounded-md"
        placeholder="ニックネームを入力してください（任意）"
      >
    </div>
    <div class="mb-4">
      <label for="message" class="block text-sm font-medium">メッセージ</label>
      <textarea
        id="message"
        v-model="message"
        class="mt-1 block w-full p-2 border rounded-md"
        placeholder="メッセージを入力してください"
      />
    </div>
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      @click="saveMessage"
    >
      投稿
    </button>
  </div>
</template>
