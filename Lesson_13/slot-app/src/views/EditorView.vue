<template>
  <div class="editor">
    <h3>Додати новий товар</h3>
    <div class="editor__list">
      <label class="editor__item"
        >Назва товару
        <input type="text" />
      </label>
			<label
        >Вартість товару
        <input type="text" />
      </label>
			<label
        >Зображення товару
        <input type="text" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorView',
}
</script>

<style lang="scss" scoped>
.editor {
  margin-top: 30px;
	h3{
		margin-bottom: 10px;
	}
	&__list{
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
}
</style>
